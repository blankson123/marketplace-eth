// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace{
    enum State {
        Purchased, 
        Activated,
        Deactivated
    }

    struct Course {
        uint id; // 32 bytes
        uint price; // 32 bytes
        bytes32 proof; // 32 bytes
        address owner; // 20 bytes
        State state; // 1 byte
    }

    // mapping of courseHash to course data
    mapping(bytes32 => Course) private ownedCourses;

    // mapping of courseID to courseHash
    mapping(uint => bytes32) private ownedCourseHash;

    // number of all courses + id of the coruse
    uint private totalOwnedCourses;

    address payable private owner;

    constructor(){
        setContractOwner(msg.sender);
    }

    /// You have already purchased this course
    error CourseHasOwner();

    /// Only owner has access
    error OnlyOwner();

    modifier onlyOwner() {
        if(msg.sender != getContractOwner()){
            revert OnlyOwner();
        }
        _;
    }

    // external means - to be only called outside of the smart contract
    function purchaseCourse(bytes16 courseId, bytes32 proof) external payable{
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if(_hasCourseOwnership(courseHash)){
            revert CourseHasOwner();
        }

        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function transferOwnership(address newOwner) external onlyOwner{
        setContractOwner(newOwner);
    }

    function getCourseCount() external view returns(uint){
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint index) external view returns(bytes32){
        return ownedCourseHash[index];
    }

    function getCourseHashByHash(bytes32 courseHash) external view returns(Course memory){
        return ownedCourses[courseHash];
    }

    function getContractOwner() public view returns(address){
        return owner;
    }

    function setContractOwner(address newOwner) private{
        owner = payable(newOwner);
        
    }

    function _hasCourseOwnership(bytes32 courseHash) private view returns(bool){
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
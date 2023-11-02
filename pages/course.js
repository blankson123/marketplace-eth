import { Modal } from "@components/common";
import { Curriculum, Hero, KeyPoints } from "@components/course";
import { BaseLayout } from "@components/layout";

export default function Course() {
  return (
    <>
      <div className="py-4">
        <Hero />
      </div>

      <KeyPoints />
      <Curriculum />
      <Modal />
    </>
  );
}

Course.Layout = BaseLayout;

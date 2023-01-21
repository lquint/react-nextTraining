import Counter from "@/components/counter";
import GenericCounter from "@/components/genericCounter";
import Notifier from "@/components/notifier";
import SkillSet from "@/components/skillSet";

export default function TestPage() {
  return (
    <div>
      <div>
        <p>Simple counter</p>
        <Counter className=""></Counter>
      </div>
      <div>
        <p>Generic counters</p>
        <GenericCounter initial={0} step={2}></GenericCounter>
        <GenericCounter initial={0} step={10}></GenericCounter>
        <GenericCounter initial={100} step={-1}></GenericCounter>
      </div>
      <div>
        <SkillSet></SkillSet>
      </div>
      <div>
        <Notifier></Notifier>
      </div>
    </div>
  );
}

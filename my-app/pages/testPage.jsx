import AutoCounter from "@/components/autoCounter";
//import Calculator from "@/components/calculator";
import Counter from "@/components/counter";
import dynamic from 'next/dynamic'
//import ErrorBoundary from "@/components/errorBoundary";
import GenericCounter from "@/components/genericCounter";
import Notifier from "@/components/notifier";
import RefForm from "@/components/refForm";
import SkillSet from "@/components/skillSet";
import ToDoList from "@/components/toDoList";
import ToggleCounter from "@/components/toggleCounter";
const ErrorBoundary = dynamic(
  () => import('../components/ErrorBoundary'),
  { ssr: false }
)
const Calculator = dynamic(
  () => import('../components/Calculator'),
  { ssr: false }
)


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
      <div>
        <ToggleCounter/>
      </div>
      <div>
        <AutoCounter/>
      </div>
      <ToDoList/>
      <RefForm></RefForm>
      <ErrorBoundary>
        <Calculator n={1}/>
      </ErrorBoundary>
    </div>
  );
}

import {
	Consideration,
	AnswerButton,
	NotsureButton,
	ConsiderationTextBox,
	Problem,
	Question,
  } from "@/features/lt-puzzles/components";
  import { BaseProps } from "@/types/BaseProps";
  import clsx from "clsx";
  import { useRouter } from "next/router";
  
  export type MainPage2Props = {} & BaseProps;
  
  /**
   * MainPage2
   * @zhihao404🚀🚀🚀
   */
  export const MainPage2 = ({ className }: MainPage2Props) => {
	const router = useRouter();
	const x = 1; // Replace with the actual value of x
  
	const handleAnswerButtonClick = () => {
	  if (x === 1) {
		router.push("/page3");
	  } else {
		router.push("/page4");
	  }
	};
  
	return (
	  <div
		className={clsx(
		  className,
		  "flex",
		  "flex-col",
		  "items-center",
		  "mt-[100px]",
		  "mx-[20px]",
		  "mb-[20px]"
		)}
	  >
		<div className={clsx("max-w-[512px]")}>
		  <Problem className={clsx("mb-[30px]")} />
		  <Question className={clsx("mb-[50px]")} />
		  <Consideration className={clsx("mb-[20px]")} />
		  <ConsiderationTextBox className={clsx("mb-[30px]")} />
		  <div className={clsx("flex", "mt-[10px]", "w-[100%]", "justify-between")}>
			<NotsureButton className={clsx("mr-[100px]")} />
			<button className={clsx("")} onClick={handleAnswerButtonClick}>
				<AnswerButton className={clsx("")} />
			</button>
		  </div>
		</div>
	  </div>
	);
  };
  
import React from "react";
import RowAnimation from "./RowAnimation";
import Title from "./Title";

 const Header = ({setFormOpen}) => {
  return (
    <>
      <RowAnimation top1={'top-[0px]'} top2={'top-[-30px]'}/>
      <RowAnimation top1={'top-[-60px]'} top2={'top-[-90px]'}/>
      <RowAnimation top1={'top-[-120px]'} top2={'top-[-150px]'}/>
      <Title setFormOpen={setFormOpen}/>
      
    </>
  );
};

export default Header
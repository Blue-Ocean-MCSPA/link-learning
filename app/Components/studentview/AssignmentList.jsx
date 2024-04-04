import React, { useContext } from 'react'
import {AppContext} from "@/app/context/index"

const AssignmentList = () => {
    const {assignments} = useContext(AppContext);
    console.log(assignments)
  return (
    <div>AssignmentList</div>
  )
}
export default AssignmentList;
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Features/themeSlice";
// import axios from "axios";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./MainContainer";
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);


  return (
    <div className="sidebar-container">
      <div className='sb-header'>
        <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        </div>
        <div>
        <IconButton onClick={()=>{navigate("users")}}>
          <PersonAddIcon />
        </IconButton>
        <IconButton onClick={()=>{navigate("groups")}}>
          <GroupAddIcon />
        </IconButton>
        <IconButton onClick={()=>{navigate("create-groups")}}>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <NightlightIcon />
        </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
        <SearchIcon />
        </IconButton>
      <input placeholder='search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationsItem  props={conversation} key={conversation.name} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
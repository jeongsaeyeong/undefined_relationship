import { BsTreeFill } from "react-icons/bs"
import { MdCalendarToday } from "react-icons/md"
import { BiMoney } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


export const menuText = [
    {
        title: "노래 유튜버 홈",
        icon: <BsTreeFill />,
        src: "/"
    },
    {
        title: "오늘의 노래",
        icon: <MdCalendarToday />,
        src: "/Today"
    },
    {
        title: "유명 유튜버 소개",
        icon: <BiMoney />,
        src: "/Youtuber"
    }
]

export const keywordText = [
    {
        title: "Sea Pearl",
        src: "/search/Sea Pearl"
    },
    {
        title: "All was well",
        src: "/search/All was well"
    },
    {
        title: "MoteMote",
        src: "/search/MoteMote"
    },
    {
        title: "yunzizi",
        src: "/search/yunzizi"
    },
    {
        title: "my blue valentine",
        src: "/search/my blue valentine"
    },
    {
        title: "새던",
        src: "/search/새던"
    },
    {
        title: "찬사",
        src: "/search/찬사"
    },
    {
        title: "luv or not",
        src: "/search/luv or not"
    },
    {
        title: "dearmyblue",
        src: "/search/dearmyblue"
    },
    {
        title: "hello, sunset",
        src: "/search/hello, sunset"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/jeongsaeyeong",
        icon: <AiFillGithub />
    },
    {
        title: "google",
        src: "jeongsaeyeong@gmail.com",
        icon: <AiFillGoogleCircle />
    },
    {
        title: "naver",
        src: "ooooo0516@naver.com",
        icon: <AiOutlineMail />
    }
]
import Container from "./IconContainer.style";
import { 
  HtmlIcon,
  CodeIcon,
  CssIcon,
  DbIcon,
  FigmaIcon,
  GitBranchIcon,
  GitIcon,
  GitPullIcon,
  JavaIcon,
  MongoIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
  SassIcon,
  PhpIcon,
  JsIcon,
  LinuxIcon,
  NetworkIcon,
 } from "@assets";

 const Icons = [
  {
    id:1,
    element: <HtmlIcon />,
    top: '-63px',
    left: '-190px',
  },
  {
    id:2,
    element: <CssIcon />,
    top: '-40px',
    left: '-137px',
  },
  {
    id:3,
    element: <JsIcon />,
    top: '-76px',
    left: '-98px',
  },
  {
    id:4,
    element: <NodejsIcon />,
    top: '-164px',
    left: '-21px',
  },
  {
    id:5,
    element: <MysqlIcon />,
    top: '-52px',
    left: '-21px',
  },
  {
    id:6,
    element: <MongoIcon />,
    top: '-100px',
    left: '-21px',
  },
  {
    id:7,
    element: <PhpIcon />,
    top: '-171px',
    left: '-78px',
  },
  {
    id:8,
    element: <ReactIcon />,
    top: '-79px',
    left: '103px',
  },
  {
    id:9,
    element: <SassIcon />,
    top: '-107px',
    left: '-178px',
  },
  {
    id:10,
    element: <CodeIcon />,
    top: '-113px',
    left: '105px',
  },
  {
    id:11,
    element: <DbIcon />,
    top: '-56px',
    left: '38px',
  },
  {
    id:12,
    element: <FigmaIcon />,
    top: '-99px',
    left: '-146px',
  },
  {
    id:13,
    element: <GitIcon />,
    top: '-115px',
    left: '-102px',
  },
  {
    id:14,
    element: <GitBranchIcon />,
    top: '-148px',
    left: '53px',
  },
  {
    id:15,
    element: <GitPullIcon />,
    top: '-103px',
    left: '10px',
  },
  {
    id:16,
    element: <JavaIcon />,
    top: '-120px',
    left: '59px',
  },
  {
    id:17,
    element: <LinuxIcon />,
    top: '-148px',
    left: '-111px',
  },
  {
    id:18,
    element: <NetworkIcon />,
    top: '-131px',
    left: '-135px',
  },

 ]

const IconContainer = () => {
  return (
    <Container>
     <HtmlIcon />
     <CodeIcon />
     <CssIcon />
     <DbIcon />
     <FigmaIcon />
     <GitBranchIcon />
     <GitPullIcon />
     <GitIcon />
     <GitPullIcon />
     <JavaIcon />
     <MongoIcon />
     <MysqlIcon />
     <NodejsIcon />
     <ReactIcon />
     <SassIcon />
     <PhpIcon />
     <JsIcon />
     <LinuxIcon />
     <NetworkIcon />
    </Container>
  );
};

export default IconContainer;

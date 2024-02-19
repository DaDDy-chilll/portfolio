
import { PageTitleTail, PageTitleHead} from "@assets";
import { Wrapper } from "./PageTitle.style";
// eslint-disable-next-line react/prop-types
const PageTitle = ({pageTitle}) => {
  const words = Array.from([...pageTitle])
  console.log(words);
 const height = (window.innerHeight / 2) / 2 ;
  return (
    <Wrapper height={height}>
        <PageTitleTail />
        <span>
          {words.map((w,i) =><p key={i}>{w}</p>)}
        </span>
        <PageTitleHead />
      </Wrapper>
  )
}

export default PageTitle
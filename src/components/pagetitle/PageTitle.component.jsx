
import { PageTitleTail, PageTitleHead} from "assets";
import { Wrapper } from "./PageTitle.style";

const PageTitle = () => {
  return (
    <Wrapper>
        <PageTitleTail />
        <span>
          <p>h</p>
          <p>o</p>
          <p>m</p>
          <p>e</p>
        </span>
        <PageTitleHead />
      </Wrapper>
  )
}

export default PageTitle
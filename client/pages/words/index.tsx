import Container from "../../components/Container";
import getConfig from "next/config";
import axios from "axios";
import { GetStaticProps} from "next";

const Words = ({words}: any) => {
  console.log(words)
    
  return(
    <Container>
      <div>
        LIST OF ALL WORDS HERE
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => { // must be async
  const {publicRuntimeConfig} = getConfig();

  const words = await axios.get(`${publicRuntimeConfig.GET_WORDS}`)
  return {
    props: {
      words
    },
  };
};


export default Words;

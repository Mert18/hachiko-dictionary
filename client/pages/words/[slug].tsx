import Container from "../../components/Container";
import getConfig from "next/config";
import { GetStaticPaths, GetStaticProps } from "next";
const Word = (word: any) => {
  
  console.log(word)
  return(
    <Container>
      <div>
        SINGLE WORD HERE
        <h1>{word.title}</h1>
      </div>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async() =>{
  const {publicRuntimeConfig} = getConfig();
  const res = await fetch(`${publicRuntimeConfig.GET_WORDS}`)
  const words = await res.json();
  const paths = words.map((word: any) => ({
    params: {slug: word.title.toString()}
  }))
  return {
    paths,
    fallback: false 
  }
  
}

export const getStaticProps: GetStaticProps= async({params}: any) => {

  const {publicRuntimeConfig} = getConfig();
  const res = await fetch(`${publicRuntimeConfig.GET_WORD}/${params.slug}`)
  const word = await res.json();
  return{
    props: {
      word
  }
}}

export default Word;

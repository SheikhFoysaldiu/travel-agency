import Feature from "../components/Feature/Feature";
import Form from "../components/Form/Form";
import Header from "../components/header/header";
import Typewriter from 'typewriter-effect';

const Home = () => {
    return(
        <>
        
    <Header/>
    <div style={{textAlign:'center',fontWeight:'bold'}}>
    <Typewriter
          options={{
              strings: ['Call us: +8801327269926', '(আইডি লগইন এর সময় IATA এর লগিন কোড সঠিক ভাবে ব্যবহার করুন)',],
              autoStart: true,
              loop: true,
              }}
      />
    </div>
    <Feature/>
    <Form/>
        </>
    )
}
export default Home;
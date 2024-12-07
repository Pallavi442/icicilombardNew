
import logo from './logo.svg';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import Customer from './components/customer/Customer';
import Insurance from './components/insurance/Insurance';
import TwoWheelerInsurance from './components/twoWheelerInsurance/TwoWheelerInsurance';
import Buy from './components/buy/Buy';
import Online from './components/online/Online';
import Reason from './components/reason/Reason';
import Policy from './components/policy/Policy';
import FAQ from './components/faq/FAQ';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Customer/>
      <Insurance/>
      <TwoWheelerInsurance/>
      <Buy/>
      <Online/>
      <Reason/>
      <Policy/>
      <FAQ/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;

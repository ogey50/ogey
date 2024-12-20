import Ogey from "./image/image 2.jpg"
import Ogey2 from "./image/image 1.jpg"
function App () {
  return (
    <div className="container-fluid">

     <div className=" row text-center text-white py-4" style={{backgroundColor:"teal"}}>
      <h3>The Moz Story</h3>
       <p> We know SEO. In fact, we wrote the blog on it.</p>

     </div>
    
     <div className=" row text-center text-black py-4" style={{backgroundColor:"whitesmoke"}}>
      <div  className="col-7 md=6 mx-auto">
       <p>  At Moz, we believe there is a better way to do marketing. A more valuable way
          where customers are earned rather than bought. We’re obsessively passionate
          about it, and our mission is to help people achieve it. We focus on search engine
          optimization. It’s one of the least understood and least transparent aspects of
          great marketing, and we see that as an opportunity. We’re excited to simplify SEO
          for everyone through our software, education, and community.
       </p> </div>

     </div>


     <div className="viewcontent">
      <div className="viewimage">
      <img src={Ogey} alt="simple pic"
      className="my-pic"style={{ width:"300px"}}/>
      
        
       
      </div>
      <div className="viewtext">
        <h2>Our Founding</h2>
        <p>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called
              SEOmoz, and started as a blog and an online community where some of the
              world’s first SEO experts shared their research and ideas. We launched the
              Beginner’s Guide to SEO and our first Search Ranking Factors study, and that
              hub of industry expertise transformed into a small consulting firm and led us
              to create some of our first SEO tools.</p>

      </div>
      
     </div>
     
     <div className="viewcontent2">
      <div className="viewtext2">
        <h2>Early Growth & Funding</h2>
        <p>After a glimpse of the demand, we shifted our focus from consulting to our
              software, taking our first round of funding in 2007 to power the development
              of new tools and ideas. By 2009, we tallied our first 5,000 subscribers and
              codified our core values in the acronym TAGFEE, continuing to lead the
              industry with our educational content in an effort to demystify SEO (this is
              also when we started filming Whiteboard Fridays!).</p>
              
      </div>        

      <div className="viewimage2">
      <img src={Ogey2} alt="simple pic2"
      className="my-pic2"style={{ width:"300px"}}/>
      </div>
     </div>

     
    
    
    
    </div>
          )
        };
        export default App;
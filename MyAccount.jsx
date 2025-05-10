import React from "react";
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div className="account-container">
      <video autoPlay loop muted id="bg---video">
        <source src="/sbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="ts">
        <h2 style={{ color: 'white' }}>Technical Skills</h2>
        
          <img src="/c.png" className="c" title="C" />
          <img src="/cpp.png" className="cpp" title="C++" />
          <img src="/java.png" className="java" title="JAVA" />
          <img src="/py.png" className="py" title="PYTHON" />
          <img src="/r.png" className="r" title="R" />
          <img src="/html.png" className="html" title="HTML" />
          <img src="/css.png" className="css" title="CSS" />
          <img src="/sql.png" className="sql" title="PostgreSql" />
          <img src="/mdb.png" className="mdb" title="MongoDB" />
          <img src="/react.png" className="rs" title="react.js" />
          
        
      </div>
      <div className="ss">
        <h2 style={{ color: 'white' }}>Soft Skills</h2>
        
          <img src="/CS.png" className="cs" title="Communication Skills" />
          <img src="/lead.png" className="lead" title="Leadership" />
          <img src="/tm.png" className="tm" title="Team Management" />
          
          
        
      </div>
    </div>
  );
};

export default MyAccount;

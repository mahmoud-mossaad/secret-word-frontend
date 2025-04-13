import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [alert, setAlert] = useState(false)

  const handleSubmit = async () => {

    if (input === 'tuna' || input === 'Tuna') {
      setShowMessage(true);

      // Send email via backend
      try {
        await fetch('https://secret-word-backend.onrender.com/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input })
        });
        setShowMessage(true);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      setAlert(true);
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      {!showMessage &&
      <>
      <img src='/tuna.jpeg' style={{ width: '200px', marginBottom: '20px' }}></img>
      <h2>What is my name?</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      {
        alert && <div style={{ padding: '8px', marginBottom: '10px' }}>Not my right name !</div>
      }
      <button onClick={handleSubmit}>Submit</button>
      </>
      }
      {showMessage && <div className="letter-container">
  <p style={{maxWidth:"400px"}}>
    Hi Mai,<br /><br />
    Thank you for taking the time to go through this puzzle. It truly means a lot to me.<br /><br />

    I’m writing this with a heavy heart and a sincere apology. I know I’ve hurt you — even though it was the last thing I ever wanted to do. The truth is, I never meant to cause you pain, sadness, or disappointment. And for that, I am deeply and genuinely sorry.<br /><br />

    You’ve always meant so much to me, more than I was ever able to express properly. Everything we shared — the songs, the laughter, the deep talks, the dreams — I held them close, and I still do. They were never just moments. They were real, meaningful, and came straight from my heart.<br /><br />

    I know you saw a version of me that was broken, struggling, and not the best version of who I want to be. I wish you hadn't had to carry the weight of that. You didn’t deserve any of it. You deserve peace, joy, clarity, and every beautiful thing this life has to offer.<br /><br />

    I’m truly sorry for letting you down. I carry that regret with me. But more than anything, I’m grateful for having had you in my life, even if only for a while. I’ll always remember the warmth, the comfort, and the light you brought with you.<br /><br />

    And who knows — maybe one day, in some quiet street in Rome, we’ll meet again. Maybe by then, time will have been kind to us both.<br /><br />

    With all my sincerity,<br />
    Mahmoud
  </p>
</div>
}
    </div>
  );
}

export default App;

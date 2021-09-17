import { useState } from 'react';

export default function MemeGenerator() {
  const [topName, setTopName] = useState('');
  const [bottomName, setBottomName] = useState('');
  const [downloadMemes, setDownloadMemes] = useState('');
  const [templateId, setTemplateId] = useState('');
  // const imageUrl = `https://api.memegen.link/images/${imageId[2]}/${topName[0]}${bottomName[1]}.png`;
  // const imageUrl = `https://api.memegen.link/images/bender`;
  const [url, setUrl] = useState('https://api.memegen.link/images/bender');

  return (
    <article>
      <label>
        <select
          value={templateId}
          onChange={(event) => setTemplateId(event.currentTarget.value)}
        >
          <option>-- Select One of The following Options -- </option>
          <option value="awesome">Socially Awesome Penguin</option>
          <option value="bender">Bender</option>
          <option value="agnes">Agnes Harkness Winking</option>
          <option value="interesting">Interesting</option>
          <option value="pigeon">Is This a Pigeon?</option>
          <option value="spiderman">Spider-Man Pointing at Spider-Man</option>
          <option value="trump">Donald Trump</option>
          <option value="whatyear">What Year Is It?</option>
          <option value="yallgot">Y'all Got Any More of Them</option>
          <option value="zero-wing">All Your Base Are Belong to Us</option>
        </select>
      </label>
      {/*  DONT MAKE ALL IN FORM BECAUSE IF YOU CREATE A BUTTON:: IT WILL SUBMIT AND ALWAY REFRESH A PAGE


       Select scroll templateId value . trying out input type after
      <label>
        Type the Meme Name:
        <input
          value={templateId}
          onChange={(event) => setTemplateId(event.currentTarget.value)}
        />
      </label> */}

      <br />
      <label>
        Above Words:
        <input
          value={topName}
          onChange={(event) => setTopName(event.currentTarget.value)}
        />
        {/* if you try to type the value of inside text show [object][object]... and other input not accepted.
        It is a controlled component because we are controlling the value here..react will re render when anyone types in
        */}
      </label>
      <br />
      <label>
        Below Words:
        <input
          value={bottomName}
          onChange={(event) => setBottomName(event.currentTarget.value)}
        />
      </label>
      <br />
      <button
        class="btn"
        onClick={() =>
          /* such command inside jsx shouldnt use {}after function otherwise return is necessary */
          setUrl(
            `https://api.memegen.link/images/${templateId}/${topName}/${bottomName}`,
          )
        }
      >
        <i class="fa fa-download"> </i> Generate
      </button>

      <button
        class="btn"
        value={downloadMemes}
        onClick={() => {
          //setDownloadMemes();
          //value isnt change asap
        }}
      >
        <i class="fa fa-download"> </i> Download
      </button>
      <br />

      <img src={url} alt="1" />
    </article>
  );
}

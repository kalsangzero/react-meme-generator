import { useEffect, useState } from 'react';

export default function MemeGenerator() {
  const [topInput, setTopInput] = useState('');

  const [bottomInput, setBottomInput] = useState('');
  const [downloadMemes] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [memeTemplate, setMemeTemplate] = useState([]);
  const [url, setUrl] = useState('https://api.memegen.link/images/bender');
  const fileSaver = require('file-saver');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates');
        const json = await response.json();
        setMemeTemplate(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const changeCustomMeme = (event) => {
    setTemplateId(event.currentTarget.value);
  };

  return (
    <article>
      <select id="templateId" value={templateId} onChange={changeCustomMeme}>
        {memeTemplate.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
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
        Above Input:
        <input
          value={topInput}
          onChange={(event) =>
            setTopInput(event.currentTarget.value.replace(/ /g, '-'))
          }
        />
        {/* if you try to type the value of inside text show [object][object]... and other input not accepted.
        It is a controlled component because we are controlling the value here..react will re render when anyone types in
        */}
      </label>
      <br />
      <label>
        Below Input:
        <input
          value={bottomInput}
          onChange={(event) =>
            setBottomInput(event.currentTarget.value.replace(/ /g, '-'))
          }
        />
      </label>
      <br />
      <button
        class="btn"
        onClick={() =>
          /* such command inside jsx shouldnt use {}after function otherwise return is necessary */
          setUrl(
            `https://api.memegen.link/images/${templateId}/${topInput}/${bottomInput}`,
          )
        }
      >
        Generate
      </button>

      <button
        class="btn"
        value={downloadMemes}
        onClick={() => {
          fileSaver.saveAs(url, 'image.jpg');
        }}
      >
        Download
      </button>
      <br />

      <img src={url} alt="1" />
    </article>
  );
}

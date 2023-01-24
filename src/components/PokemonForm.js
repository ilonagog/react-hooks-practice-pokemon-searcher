import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPoke }) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    let newPoke = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      header: {
        "content-type": "applicatioon/json",
      },
      body: JSON.stringify(newPoke)
    })
      .then(r => r.json())
      .then(addNewPoke(newPoke))

  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

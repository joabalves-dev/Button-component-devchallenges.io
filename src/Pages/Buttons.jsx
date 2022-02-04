import React from "react";
import "./style_buttons.css";

import Title from "../Components/Title";
import Button from "../Components/Button";

function Buttons() {
  return (
    <div className="Buttons">
      <Title text={"Buttons"} />
      <div className="grid">
        <Button code={"<Button />"} text={"Default"} />
      </div>
      <div className="grid">
        <Button
          code={"<Button variant='outline' />"}
          variant={"outline"}
          text={"Default"}
        />
      </div>
      <div className="grid">
        <Button
          code={"<Button variant='text' />"}
          variant={"text"}
          text={"Default"}
        />
      </div>
      <div className="grid">
        <Button
          color={"primary"}
          code={"<Button disableShadow />"}
          text={"Default"}
          disableShadow
        />
      </div>
      <div className="grid">
        <Button code={"<Button disabled />"} text={"Disabled"} disabled />
        <Button
          code={"<Button disabled text />"}
          text={"Disabled"}
          variant={"text"}
          disabled
        />
      </div>
      <div className="grid">
        <Button
          color={"primary"}
          code={"<Button startIcon=”local_grocery_store” />"}
          startIcon={"local_grocery_store"}
          text={"Default"}
        />
        <Button
          color={"primary"}
          code={"<Button startIcon=”local_grocery_store” />"}
          endIcon={"local_grocery_store"}
          text={"Default"}
        />
      </div>
      <div className="grid">
        <Button code={"<Button size=”sm” />"} size={"sm"} text={"Default"} color={'primary'}/>
        <Button code={"<Button size=”lg” />"} size={"lg"} text={"Default"} color={'primary'}/>
        <Button code={"<Button size=”md” />"} size={"md"} text={"Default"} color={'primary'}/>
      </div>
      <div className="grid">
        <Button
          code={"<Button color=”default” />"}
          size={"md"}
          text={"Default"}
          color={"default"}
        />
        <Button
          code={"<Button color=”primary” />"}
          size={"md"}
          text={"Default"}
          color={"primary"}
        />
        <Button
          code={"<Button color=”secondary” />"}
          size={"md"}
          text={"Default"}
          color={"secundary"}
        />
        <Button
          code={"<Button color=”danger” />"}
          size={"md"}
          text={"Default"}
          color={"danger"}
        />
      </div>
    </div>
  );
}

export default Buttons;

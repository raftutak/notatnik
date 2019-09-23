import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import FormRadio from "../Form/FormRadio";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note"
};

const descriptions = {
  twitter: "favorite twitter account",
  article: "article",
  note: "note"
};

class Form extends React.Component {
  state = {
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: ""
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = event => {
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    });

    console.log(`
    title: ${this.state.title},
    link: ${this.state.link},
    image: ${this.state.image},
    description: ${this.state.description}
    `);
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add a new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={event => context.addItem(event, this.state)}
            >
              <div className={styles.formOptions}>
                <FormRadio
                  id={types.twitter}
                  checked={type === types.twitter}
                  changeFunction={() =>
                    this.handleRadioButtonChange(types.twitter)
                  }
                >
                  Twitter
                </FormRadio>
                <FormRadio
                  id={types.article}
                  checked={type === types.article}
                  changeFunction={() =>
                    this.handleRadioButtonChange(types.article)
                  }
                >
                  Article
                </FormRadio>
                <FormRadio
                  id={types.note}
                  checked={type === types.note}
                  changeFunction={() =>
                    this.handleRadioButtonChange(types.note)
                  }
                >
                  Note
                </FormRadio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === types.twitter ? "Twitter name" : "Title"}
                maxLength={50}
              />
              {type === types.twitter && (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              )}
              {type === types.note ? null : (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={type === types.twitter ? "Twitter link" : "Link"}
                />
              )}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;

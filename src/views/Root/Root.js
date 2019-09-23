import React from "react";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  // STATE
  state = {
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false
  };

  // ADD-ITEM
  addItem = (event, newItem) => {
    event.preventDefault(); // po wywolaniu submita nie przeladuje automatycznie przegladarki

    // prevState uzywany bo setState jest asynchroniczne i zawsze lepiej odwolywac sie do poprzedniego state a nie aktualnego
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));

    this.closeModal();
  };

  // OPEN-MODAL
  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  // CLOSE-MODAL
  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  // RENDER
  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFunction={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFunction={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

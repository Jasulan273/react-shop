import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Кровать',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'sofa',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Настольная лампа',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'light',
          price: '29.99'
        },
        {
          id: 4,
          title: 'Диван',
          img: 'armchair.jpeg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'chairs',
          price: '39.99'
        },
        {
          id: 5,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'tables',
          price: '69.99'
        },
        {
          id: 6,
          title: 'Шкаф',
          img: 'closet.jpg',
          desc: 'Lorem ipsum dolar sit amet, consectutur adipisicing.',
          category: 'sofa',
          price: '89.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
         
        </div>
        <Footer />
      </div>

    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }


  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }


  }
}

export default App;
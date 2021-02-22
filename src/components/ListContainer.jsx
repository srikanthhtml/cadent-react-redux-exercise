import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, selectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
  },
}) => ({
  groceryList,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
  }, dispatch)
);

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection groceryList={this.props.groceryList} />
          <ListTable groceryList={this.props.groceryList} removeItem={this.props.removeItem} selectItem={this.props.selectItem} />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;

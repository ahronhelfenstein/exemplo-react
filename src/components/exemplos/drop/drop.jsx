import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

 export default class Drop extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
      render() {
        return (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Menu
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Unimed</DropdownItem>
              <DropdownItem disabled>Eh noix</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }
}
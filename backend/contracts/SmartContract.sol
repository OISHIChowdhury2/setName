// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SmartContract {
  
  struct Info {
      string name;
      string addres;
      uint256 phone;
  }
  Info info;
  
   function setName(string memory _name,string memory _addres, uint256 _phone) public {   
          info.name=_name;
          info.addres=_addres;
          info.phone=_phone;
         }
    
    function getName()public view returns(string memory){
      return info.name;
      
    }
    function getAddres()public view returns(string memory){
      return info.addres;
      
    }
    function getphone()public view returns(uint256){
      return info.phone;
      
    }
}

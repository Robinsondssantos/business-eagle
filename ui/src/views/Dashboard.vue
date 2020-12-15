<template>
  <div class="head-container">
    <div class="head">
      <account-circle class="account-circle-icon"></account-circle>
      <span>ROBINSON D. S. SANTOS</span>
      <chevron-down class="chevron-down-icon"></chevron-down>
    </div>
  </div>
  <div class="nav-container">
    <div class="nav-box">
      <ul class="nav">
        <li>Incomes</li>
        <li>Expenses</li>
      </ul>
    </div>
    <div class="nav-line">
    </div>
  </div>
  <div class="content-container">
    <table>
      <tr>
        <th>Selection</th>
        <th>Description</th>
        <th>Client</th>
        <th>Date</th>
        <th>Value</th>
        <th>Status</th>
      </tr>
      <tr>
        <td></td>
        <td>Something</td>
        <td>Someone</td>
        <td>Someday</td>
        <td>Some value</td>
        <td>No received</td>
      </tr>
    </table>
  </div>
</template>

<script>

import { AccountCircle, ChevronDown } from 'mdue'

export default {
  components: {
    AccountCircle,
    ChevronDown
  }
}
</script>

<style scoped>

  ul {
    list-style-type: none;
  }

  li {
    padding: 12px 0;
    margin: 0 12px;
    cursor: pointer;
  }

  li:first-child {
    margin-left: 0;
  }

  li::after {
    content: '';
    height: 2px;
    width: 100%;
    margin: 12px 0;
    background: #007bfc;
    display: block;
  }

  table {
    font-size: 0.9em;
    border-collapse: collapse;
  }

  tr {
    border: 1px solid #dddde5;
  }

  th {
    font-weight: normal;
  }

  th, td {
    padding: 16px;
  }
  
  .head-container {
    border-bottom: 1px solid #dddde5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .head {
    height: 62px;
    /* width: 1350px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }

  .nav-container {
    /* border-bottom: 1px solid #dddde5; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .nav-box {
    height: 150px;
    /* width: 1350px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
  }

  .nav-line {
    border-top: 1px solid #dddde5;
    width: 100%;
    position: relative;
    display: block;
    top: -25px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .incomes {
    height: 150px;
    border-bottom: 1px solid #dddde5;
  }

  .account-circle-icon {
    color: #babadc;
    font-size: 1.4em;
    margin: 0 5px;
  }

  .chevron-down-icon {
    font-size: 1em;
    margin: 0 5px;
  }
</style>
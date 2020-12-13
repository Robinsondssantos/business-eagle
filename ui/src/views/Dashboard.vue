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
    background: blue;
    display: block;
  }
  
  .head-container {
    border-bottom: 1px solid #dddde5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .head {
    height: 42px;
    width: 1350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
  }

  .nav-container {
    /* border-bottom: 1px solid #dddde5; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav-box {
    height: 150px;
    width: 1350px;
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
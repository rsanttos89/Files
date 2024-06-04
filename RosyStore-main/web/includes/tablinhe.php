<style>
  #line {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 1280px;
    margin-bottom: 16px;
  }

  #line hr {
    border: solid 1px var(--border);
    position: absolute;
    width: 100%; /* Ocupa toda a largura disponível */
  }

  #line .text {
    width: auto;
    text-transform: uppercase;
    background-color: var(--background);
    padding: 0px 16px;
  }
</style>

<span id="line">
  <hr />
  <span class="text">
    <?php echo $title  ?>
  </span>
</span>
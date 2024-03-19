<script>
  export let initialCount
  export let maxCount = 8
  let count = initialCount; 

  console.log($$props, $$restProps)

  const increment = ()=>{
    if (count === maxCount) return
    count += 1
  }

 
</script>

<button  on:click={increment}>Clicks {count}</button>

<style>
  button {
    padding: 15px 20px
  }
</style>
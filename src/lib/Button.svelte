<script>
	export let size = 'large';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';
	// export let disabled = false;

	let isLeftHovered;
	console.log($$restProps);
</script>

<!-- <button class={size ==="large" ? "size-lg" : "size-sm"}><slot>FallBack</slot></button> -->
<button
	style:--buttonBGColor={bgColor}
	style:--buttonTextColor={textColor}
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	class:shadow
	class:has-left={$$slots.leftContent}
	{...$$restProps}
	on:click
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" {isLeftHovered} x="y" />
		</div>
	{/if}
	<slot>FallBack</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		border: none;
		background-color: var(--buttonBGColor);
		color: var(--buttonTextColor);
		font-weight: bold;
		border-radius: 5px;
		padding: 15px 20px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.7) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
		}
	}
</style>

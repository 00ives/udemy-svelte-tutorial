<script>
	import settings from './stores/settings';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Scribble&display=swap"
		rel="stylesheet"
	/>
	{#if $settings.colorScheme === 'dark'}
		<style>
			:root {
				--backgroundColor: #1d1d1d;
				--textColor: #fff;
			}
		</style>
	{:else}
		<style>
			:root {
				--backgroundColor: #fff;
				--textColor: #000;
			}
		</style>
	{/if}
</svelte:head>

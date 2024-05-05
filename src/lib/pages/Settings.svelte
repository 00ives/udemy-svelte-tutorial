<script>
	import settings from '../stores/settings';
</script>

<h2>Settings</h2>

<button
	on:click={() => {
		$settings.colorScheme = $settings.colorScheme === 'dark' ? 'light' : 'dark';
	}}>Toggle Theme</button
>
{$settings.colorScheme}
<label for="">
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="dark" /> Dark
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="light" /> Light
</label>

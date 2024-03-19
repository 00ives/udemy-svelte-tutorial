<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { onMount, tick } from 'svelte';
	// import { response } from 'express';

	let todoList;
	let showList = true;

	// let todos = [
	// 	{
	// 		id: uuid(),
	// 		title: 'Todo 1',
	// 		completed: true
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'Todo 2',
	// 		completed: false
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'Todo 3',
	// 		completed: true
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title:
	// 			'A long long long long long long long long long long long long long long long long todo',
	// 		completed: false
	// 	}
	// ];

	let todos = null;
	let error = null;
	let isLoading = false;

	onMount(() => {
		loadTodos();
	});

	const loadTodos = async () => {
		isLoading = true;
		await fetch('https://jsonplaceholder.typicode.com/todoss?_limit=10').then(async (response) => {
			if (response.ok) {
				todos = await response.json();
			} else {
				error = 'An error has occurred.';
			}
		});
		isLoading = false;
	};

	async function handleAddTodo(event) {
		event.preventDefault();

		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				completed: false
			}
		];
		await tick();

		todoList.clearInput();
	}

	function handleRemoveTodo(event) {
		todos = todos.filter((t) => t.id !== event.detail.id);
	}

	function handleToggleTodo(event) {
		todos = todos.map((todo) => {
			if (todo.id === event.detail.id) {
				return { ...todo, completed: event.detail.value };
			}
			return { ...todo };
		});
	}
</script>

<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide List
</label>

{#if showList}
	<div style:max-width="400px">
		<TodoList
			{todos}
			{error}
			{isLoading}
			bind:this={todoList}
			on:addtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
		/>
	</div>
{/if}

<style>
</style>

<script lang="ts">
    import { gameStarted, startGame } from "$lib/game-manager";

    const startGameButton = () => $gameStarted = !$gameStarted;

    $: if($gameStarted) {
       startGame() 
    }

</script>

<h1>Svelte Blackjack</h1>


{#if $gameStarted} 
    <h1>Game Started</h1>
{:else}
    <div>
        <button on:click={startGameButton} class="p-3">Start Game</button>
    </div>
{/if}
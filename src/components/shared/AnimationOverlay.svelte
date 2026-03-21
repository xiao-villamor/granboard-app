<script lang="ts">
  import { animations } from '@/stores/animations.svelte';
  import HitSequenceAnimation from './HitSequenceAnimation.svelte';
</script>

{#if animations.currentAnimation}
  <div class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div class={animations.currentAnimation.type === 'hit-sequence' ? '' : 'animate-bounce-in'}>
      {#if animations.currentAnimation.type === 'hit-sequence' && animations.currentAnimation.data}
        {#key animations.animationKey}
          <HitSequenceAnimation hits={animations.currentAnimation.data} />
        {/key}
      {/if}

      {#if animations.currentAnimation.type === 'three-miss'}
        <div class="text-center">
          <div class="text-9xl mb-4 animate-shake">🐐</div>
          <div class="text-4xl font-bold text-white animate-pulse">
            Three Misses!
          </div>
        </div>
      {/if}

      {#if animations.currentAnimation.type === 'three-triple'}
        <div class="text-center">
          <div class="text-9xl mb-4 animate-rainbow">🦄</div>
          <div class="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Hat Trick!
          </div>
          <div class="text-2xl text-purple-300 mt-2">
            Three triples in a row!
          </div>
        </div>
      {/if}

      {#if animations.currentAnimation.type === 'victory'}
        <div class="text-center">
          <div class="text-9xl mb-4 animate-trophy">🏆</div>
          <div class="text-4xl font-bold text-yellow-400 animate-pulse">
            Victory!
          </div>
          <div class="text-2xl text-purple-300 mt-2">
            Congratulations!
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  @keyframes bounce-in {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
  }

  @keyframes trophy {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes rainbow {
    0% { filter: hue-rotate(0deg) brightness(1.2); transform: scale(1); }
    25% { filter: hue-rotate(90deg) brightness(1.5); transform: scale(1.1); }
    50% { filter: hue-rotate(180deg) brightness(1.2); transform: scale(1); }
    75% { filter: hue-rotate(270deg) brightness(1.5); transform: scale(1.1); }
    100% { filter: hue-rotate(360deg) brightness(1.2); transform: scale(1); }
  }

  :global(.animate-bounce-in) { animation: bounce-in 0.3s ease-out; }
  :global(.animate-shake) { animation: shake 0.4s ease-in-out; }
  :global(.animate-trophy) { animation: trophy 0.8s ease-in-out infinite; }
  :global(.animate-rainbow) { animation: rainbow 1.5s ease-in-out infinite; }
</style>

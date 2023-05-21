<template>
  <main>
    <div class="text-center">
			<slot name="header">
      <p class="not-found">404</p>
      <h1>Pagina não encontrada</h1>
			</slot>
			<slot>
      	<p class="message">Sinto muito, não conseguimos encontrar a página que você esta buscando</p>
			</slot>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <slot name="actions"></slot>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
 @apply grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8;
}
p {
	@apply text-base;
}
p.not-found{
	@apply font-semibold text-primary;
}
p.message {
	@apply mt-6 leading-7 text-gray-600;
}
h1 {
	@apply mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl;
}
</style>
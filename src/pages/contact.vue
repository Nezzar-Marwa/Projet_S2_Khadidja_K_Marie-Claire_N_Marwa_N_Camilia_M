<script setup lang="ts">
</script>

<template>
        <h4 class="mb-8 font-poppins text-center text-sm">Une remarque ? une suggestion ? un commentaire ? N’hésitez pas à nous en faire part.
            Car pour nous votre avis compte</h4>
    <section class="flex justify-center items-center" >
      <form action="#">
      <div>
        <label for="Prénom*">Prénom<span class="text-toniccolor">*</span> </label>
        <input class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor lg:px-24 " type="text" name="Prénom" id="Prénom">
      </div>
      <div>
        <label for="Nom*">Nom<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor lg:px-24  " type="text" name="Nom" id="Nom">
      </div>
      <div>
        <label for="Mail*">Mail<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor  invalid:border-invalid invalid:text-invalid focus:outline-none focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid lg:px-24 " type="email" placeholder="VotreEmail@gmail.com" name="Mail">
      </div>
      <div>
        <label for="Téléphone*">Téléphone<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor  invalid:border-invalid invalid:text-invalid focus:outline-none focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid lg:px-24 " type="text" placeholder="Votre numéro ici" name="Téléphone">
      </div>
      <div>
        <label for="message*">Message<span class="text-toniccolor">*</span></label>
        <textarea class="flex rounded-lg text-text border mb-4 px-16 py-1  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor lg:px-28"  id="msg" name="message" rows="5"></textarea>
      </div>
      <div>
      <button class="rounded-full border border-toniccolor px-10 py-3 font-bold text-backgroundcolor hover:bg-toniccolor"  type="submit">Envoyer</button>
    </div>
    </form>
    </section>
</template>

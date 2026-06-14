<script setup lang="ts">
import { PrismicImage } from "#components";
import type { Content } from "@prismicio/client";
const prismic = usePrismic();

const props = defineProps(getSliceComponentProps<Content.CaseStudiesSlice>());
const caseStudies = computed(() => {
  return props.slice.primary.case_studies.map((item) => item.link).filter((link) => prismic.isFilled.contentRelationship(link)) as unknown as Content.CaseStudyDocument[];
});
</script>

<template>
  <Bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <h2 class="max-w-2xl text-balance text-center text-5xl md:text-7xl font-medium">
      <PrismicRichText :field="slice.primary.heading" />
    </h2>

    <div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
      <PrismicRichText :field="slice.primary.body" />
    </div>
    <div class="mt-20 grid gap-16">
      <article
        v-for="(caseStudy, index) in caseStudies"
        :key="caseStudy.id"
        class="group relative grid gap-4 md:gap-8 opacity-85 transition-opacity will-change-auto duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="col-span-1 flex flex-col justify-center gap-4">
          <h3 class="text-4xl">
            <PrismicText :field="caseStudy.data?.company" />
          </h3>
          <div class="max-w-md">
            <PrismicText :field="caseStudy.data?.description" />
          </div>

          <PrismicLink :document="caseStudy" class="z-10 after:absolute after:inset-0 hover:underline"> Read <PrismicText :field="caseStudy.data.company" /> case study </PrismicLink>
        </div>
        <div class="relative lg:col-span-2" :class="index % 2 && 'md:-order-1'">
          <div class="image-glow -bottom-8 -left-4 bg-sky-500" />
          <div class="image-glow -right-4 -top-8 bg-teal-500" />
          <PrismicImage :field="caseStudy.data?.cover" class="z-20 scale-[.98] rounded-xl transition-transform will-change-transform duration-300 group-hover:scale-100" />
        </div>
      </article>
    </div>
  </Bounded>
</template>

<style scoped>
.image-glow {
  @apply absolute h-1/2 w-1/2 rounded-full opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30;
}
</style>
>

<script setup lang="ts">
import { Pagination } from "@ark-ui/vue/pagination";
</script>

<template>
  <Pagination.Root :count="100" :page-size="10" :sibling-count="2">
    <Pagination.PrevTrigger>
      Previous
      <span className="visually-hidden">Page</span>
    </Pagination.PrevTrigger>
    <Pagination.Context v-slot="pagination">
      <template v-for="(page, index) in pagination.pages">
        <Pagination.Item
          v-if="page.type === 'page'"
          :key="index"
          :value="page.value"
          :type="page.type"
        >
          {{ page.value }}
        </Pagination.Item>
        <Pagination.Ellipsis v-else :key="'e' + index" :index="index">&#8230;</Pagination.Ellipsis>
      </template>
    </Pagination.Context>
    <Pagination.NextTrigger>
      Next
      <span className="visually-hidden">Page</span>
    </Pagination.NextTrigger>
  </Pagination.Root>
</template>

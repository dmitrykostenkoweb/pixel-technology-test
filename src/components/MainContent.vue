<template>
  <div class="list__wrapper paper">
    <my-dialog class="dialog" v-model:show="dialogVisible">
      <med-item v-for="med in newMedicine" :key="med.id" :med="med"  />
    </my-dialog>

    <div class="list__sort-panel">
      <button @click="fetchPatients" class="btn">All</button>
      <button v-bind:disabled="myDisabled30" @click="sortOver30" class="btn">
        powyżej 30
      </button>
      <button v-bind:disabled="myDisabled63" @click="sortUnder63" class="btn">
        poniżej 63
      </button>
    </div>

    <list
      class="list"
      :patients="patients"
      :newMedicine="newMedicine"
      @show="findMedicineId"
      v-if="!isListLoading"
    />
    <span v-else>Loading...</span>

    <div class="page__wrapper">
      <button
        v-for="pageNum in totalPage"
        :key="pageNum"
        class="page btn"
        :class="{
          ' current-page': page === pageNum,
          hide: myDisabled30 == true,
          hide: myDisabled63 == true,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import List from "./List.vue";
import MyDialog from "./MyDialog.vue";
import MedItem from "./MedItem.vue";

export default {
  components: {
    List,
    MyDialog,
    MedItem,
  },
  name: "MainContent",
  data() {
    return {
      patients: [],
      allPatients: [],
      medicine: [],
      newMedicine: [],
      isListLoading: false,
      dialogVisible: false,
      page: 1,
      limit: 10,
      totalPage: 0,
      myDisabled30: false,
      myDisabled63: false,
    };
  },
  mounted() {
    this.fetchPatients();
    this.fetchMedicine();
    this.fetchAllPatients();
  },

  computed: {},
  methods: {
    async fetchPatients() {
      try {
        this.isListLoading = true;
        const response = await axios.get(
          "https://cerber.pixel.com.pl/api/patients",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.patients = response.data;
      } catch (error) {
        alert(`Error ${error}`);
      } finally {
        this.isListLoading = false;
        this.myDisabled30 = false;
        this.myDisabled63 = false;
        
      }
    },
    async fetchMedicine() {
      try {
        const response = await axios.get(
          "https://cerber.pixel.com.pl/api/medicine"
        );
        this.medicine = response.data;
      } catch (error) {
        alert(`Error ${error}`);
      }
    },
    async fetchAllPatients() {
      try {
        const response = await axios.get(
          "https://cerber.pixel.com.pl/api/patients"
        );
        this.allPatients = response.data;
      } catch (error) {
        alert(`Error ${error}`);
      }
    },
    findMedicineId(pat) {
const medicineIds =[]

      this.medicine.forEach((elem) => {
        const { patientIds, id } = elem;

        if (patientIds.includes(pat.id)) {
          let myId = id;
          medicineIds.push(myId);
        }
      });

      ////////////
            this.newMedicine.splice(0, 100);
            /////
     medicineIds.map((id) => {
        for (let idx = 0; idx < this.medicine.length; idx++) {
          if (this.medicine[idx].id == id) {
            this.newMedicine.push(this.medicine[idx]);
          }
        }
      });
      this.dialogVisible = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.fetchPatients();
    },
    sortOver30() {
      this.patients = this.allPatients.filter((item) => {
        return item.age > 30;
      });
      this.myDisabled30 = true;
      this.myDisabled63 = false;
      
      // this.totalPage = Math.ceil(this.patients.length / this.limit);
      // this.patients = this.patients.slice( , this.page+10)
    },
    sortUnder63() {
      this.patients = this.allPatients.filter((item) => {
        return item.age < 63;
      });
      this.myDisabled63 = true;
      this.myDisabled30 = false;
    },
  },
  watch:{
    dialogVisible(){
    }
  }
};
</script>
<style scoped>
.list__wrapper {
  margin: 20px;
  padding: 20px;
}
.page__wrapper {
  margin-top: 20px;
  display: flex;
  gap: 5px;
}
.page {
  padding: 5px;
  border-radius: 50%;
  width: 30px;
}
.current-page {
  background: rgba(255, 0, 0, 0.5);
}


</style>

<template>
  <div class="list__wrapper paper">
    <my-dialog class="dialog" v-model:show="dialogVisible">
      <med-item
        v-for="patientMedication in patientMedication"
        :key="patientMedication.id"
        :patientMedication="patientMedication"
      />
    </my-dialog>

    <div class="list__sort-panel">
      <button @click="getData" class="btn">All</button>
      <button v-bind:disabled="myDisabled30" @click="sortOver30" class="btn">
        powyżej 30
      </button>
      <button
        v-bind:disabled="myDisabled63"
        @click="sortUnder63Strength8"
        class="btn"
      >
        poniżej 63
        <br />
        z lekami mocy powyżej 8
      </button>
    </div>

    <!-- <filter-panel @serchName="patientSearch" :allData="allData" /> -->
    <transition-group name="list">
      <list
        class="list"
        :allData="allData"
        :patientMedication="patientMedication"
        @show="getPatientMedication"
        v-if="!isLoading"
      />
      <spinner style="position: absolute; margin-top: 55vh" v-else />
    </transition-group>

    <!-- <div class="page__wrapper">
      <button
        v-for="pageNum in totalPage"
        :key="pageNum"
        class="page btn"
        :class="{
          ' current-page': page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import List from "./List.vue";
import MyDialog from "./UI/MyDialog.vue";
import MedItem from "./MedItem.vue";
import Spinner from "./UI/Spinner.vue";
// import FilterPanel from "./FilterPanel.vue";

export default {
  components: {
    List,
    MyDialog,
    MedItem,
    Spinner,
    // FilterPanel,
  },
  name: "MainContent",
  data() {
    return {
      allData: [],
      filtredAllData: [],
      medicine: [],
      patientMedication: [],

      isLoading: false,
      dialogVisible: false,
      // page: 1,
      // limit: 10,
      // totalPage: 0,
      myDisabled30: false,
      myDisabled63: false,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      this.isLoading = true;
      this.myDisabled63 = true;
      this.myDisabled30 = true;

      try {
        const responsePatients = await axios.get(
          "https://cerber.pixel.com.pl/api/patients"
        );
        this.allData = responsePatients.data;
        const responseMedicine = await axios.get(
          "https://cerber.pixel.com.pl/api/medicine"
        );
        this.medicine = responseMedicine.data;
      } catch (error) {
        alert(`Error ${error}`);
      } finally {
        this.allData.map((patient) => {
          patient.medicineArr = [];

          for (let i = 0; i < this.medicine.length; i++) {
            const med = this.medicine[i];

            if (med.patientIds.includes(patient.id)) {
              patient.medicineArr.push(med);
            }
          }
        });
        this.isLoading = false;
        this.myDisabled63 = false;
        this.myDisabled30 = false;
      }
    },
    ///////////////////

    getPatientMedication(pat) {
      this.allData.forEach((elem) => {
        const { id, medicineArr } = elem;

        if (id === pat.id) {
          medicineArr.map((med) => this.patientMedication.push(med));
        }
      });
      this.dialogVisible = true;
      this.scrollToTop();
    },

    ///////////////////
    // patientSearch(name) {
    //   this.allData = this.allData.filter((patient) => {
    //     return patient.name.toLowerCase().includes(name.toLowerCase());
    //   });
    // },
    ///////////////////
    sortOver30() {
      this.isLoading = true;

      this.allData = this.allData.filter((item) => {
        return item.age > 30;
      });
      this.myDisabled30 = true;
      this.myDisabled63 = false;
      this.isLoading = false;
    },

    ///////////////////
    sortUnder63Strength8() {
      this.isLoading = true;

      const result = [];

      console.log(result);
      this.allData.forEach((elem) => {
        if (elem.age < 63) {
          elem.medicineArr.forEach((e) => {
            if (e.strength > 8) {
              result.push(elem);
            }
          });
        }
      });
      const uniqueArray = result.filter((item, pos, self) => {
        return self.indexOf(item) == pos;
      });
      this.allData = uniqueArray;

      this.myDisabled63 = true;
      this.myDisabled30 = false;
      this.isLoading = false;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {},
  watch: {
    dialogVisible(newValue) {
      if (newValue === false) {
        this.patientMedication.splice(0, 100);
      }
    },
  },
};
</script>
<style scoped>
.list__sort-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.list__wrapper {
  max-width: 1800px;
  min-width: 300px;
  min-height: 800px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
/* .page__wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.page {
  padding: 5px;
  border-radius: 50%;
  width: 30px;
}
.current-page {
  background: rgba(255, 0, 0, 0.5);
} */
.list-item {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>

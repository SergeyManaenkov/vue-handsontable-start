<template>
    <div id="hot-preview" class="hot">
        <hot-table :settings="settings"></hot-table>
    </div>
</template>

<script>

    import { HotTable } from '@handsontable-pro/vue';

    debugger;
    export default {
        components: {
            HotTable
        },
        data: function(){
            return {
                settings: {
                    data: [
                        ["", "Ford", "Volvo", "Toyota", "Honda"],
                        ["2016", 10, 11, 12, 13],
                        ["2017", 20, 11, 14, 13],
                        ["2018", 30, 15, 12, 13]
                    ],
                    colHeaders: true,
                    rowHeaders: true
                }
            }
        }
    }

</script>

<style src="../node_modules/handsontable-pro/dist/handsontable.full.css"></style>
<style>
    #hot-preview {
        width: 600px;
        height: 400px;
        overflow: hidden;
    }
</style>
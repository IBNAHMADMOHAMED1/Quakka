<template>
    <div>
        <h3>Price Range</h3>
        <input type="range" class="form-range" name="range" step="1" min="100" max="10000" value="10"
            onchange="rangePrimary.value=value">
        <div class="range-inner">
            <label>$</label>
            <input type="text" id="rangePrimary" placeholder="100" >
        </div>
    </div>
</template>
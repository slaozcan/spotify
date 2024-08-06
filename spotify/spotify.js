const VQ = document.getElementById('VQ');

const data = {
    name: 'Sila',
    podcast_count: 45,
    song1_name: 'A',
    song1_time: 6748,
    song2_name: 'B',
    song2_time: 7980,
    song3_name: 'C',
    song3_time: 8789,
    song4_name: 'D',
    song5_name: 'E',
    time: 240587
};

VQ.src = `https://play.omma.io/c/c0iJbE/index.html?name=${data.name}&time=${data.time}&song1_time=${data.song1_time}&song2_time=${data.song2_time}&song3_time=${data.song3_time}&song1_name=${data.song1_name}&song2_name=${data.song2_name}&song3_name=${data.song3_name}&song4_name=${data.song4_name}&song5_name=${data.song5_name}&podcast_count=${data.podcast_count}`;

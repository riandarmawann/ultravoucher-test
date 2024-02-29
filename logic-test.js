function groupAnagrams(strings) {
    const groupedAnagrams = [];
  
    // Objek untuk menyimpan anagram
    const anagramGroups = [];
  
    // Iterasi melalui setiap string dalam array
    for (let i = 0; i < strings.length; i+) {
        const word = strings[i];
  
        // Mengurutkan karakter dalam string
        const sortedWord = word.split('').sort();
  
        // menambahkan kelompok anagram
        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    }
  
    // Menambahkan setiap kelompok anagram ke dalam array
    for (const key in anagramGroups) {
        groupedAnagrams.push(anagramGroups[key]);
    }
  
    return groupedAnagrams;
  }
  
  const strings = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  const result = groupanagram(string);
  console.log(result);
namespace CoastalSongChoiceApp.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }

        public SongList SongList { get; set; }
        public int SongId { get; set; }

    }
}
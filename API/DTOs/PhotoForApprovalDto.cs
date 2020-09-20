namespace API.DTOs
{
    public class PhotoForApprovalDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Username { get; set; }
        public bool IsApproved { get; set; }
    }
}
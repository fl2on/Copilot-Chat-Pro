namespace CopilotChatPro
{
    public class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder.ConfigureMauiHandlers((_) => { });
            builder.UseMauiApp<App>();

            return builder.Build();
        }
    }
}
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen bg-aether-sky relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-8xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Aether
                    </h1>
                    <p className="text-2xl text-white mb-2">build a Godot Platformer</p>
                    <p className="text-2xl text-white mb-8">get free candy</p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link
                            href="https://docs.google.com/presentation/d/1uBDKqBVDsAhnCUvP8H6fnxIGNQIMl4l81xQNHQ1i7Cc/edit?usp=sharing"
                            className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                            target="_blank"
                        >Read our guide
                        </Link>

                        <Link
                            href="/submit"
                            target="_blank"
                            className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                        >Get your candy
                        </Link>

                        <Link
                            href="/workshop"
                            target="_blank"
                            className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            Run a workshop
                        </Link>
                    </div>
                </div>

                <div className="bg-aether-dark text-white rounded-lg p-8 shadow-2xl">
                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-3">Who?</h2>
                        <p className="text-lg">Any teenager (between 13 and 18 inclusive) can participate!</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-3">What?</h2>
                        <p className="text-lg mb-3">Have you ever wanted to make a game before?</p>
                        <p className="text-lg mb-4">Don&#39;t know how? Godot is a great place to start! Just follow the guide and learn how to use Godot.</p>
                        <p className="text-lg">
                            By completing the guide, and meeting our requirements you&#39;ll get $5 to buy candy for yourself (or your
                            club)
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-3">How?</h2>
                        <ol className="text-lg space-y-2 list-decimal list-inside">
                            <li>
                                <Link
                                    href="https://docs.google.com/presentation/d/1uBDKqBVDsAhnCUvP8H6fnxIGNQIMl4l81xQNHQ1i7Cc/edit?usp=sharing"
                                    target="_blank"
                                    className="underline"
                                >Follow the guide!
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/submit"
                                    target="_blank"
                                    className="underline"
                                >Submit your game!
                                </Link>
                            </li>
                            <li>Enjoy your candy!</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-3xl font-bold mb-3">Example :)</h2>
                        <div className="flex justify-center mb-4">
                            <iframe
                                frameBorder="0"
                                src="https://itch.io/embed-upload/15658448?color=333333"
                                allowFullScreen
                                width="640"
                                height="380"
                                className="rounded"
                            >
                            </iframe>
                        </div>
                        <p className="text-lg mb-3">Use arrow keys to move and space to jump</p>
                        <p className="text-lg">
                            <Link href="/gallery" className="underline hover:text-gray-300">
                                View the Gallery
                            </Link>{" "}
                            for more submissions!
                        </p>
                    </section>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <Link
                        href="https://docs.google.com/presentation/d/1uBDKqBVDsAhnCUvP8H6fnxIGNQIMl4l81xQNHQ1i7Cc/edit?usp=sharing"
                        target="_blank"
                        className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        Read our guide
                    </Link>
                    <Link
                        href="/submit"
                        target="_blank"
                        className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        Get your candy
                    </Link>
                    <Link
                        href="/workshop"
                        target="_blank"
                        className="bg-aether-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        Run a workshop
                    </Link>
                </div>

                <footer className="text-center mt-12 text-white text-sm"> {"<3"} made with love by Derek for Hack Club</footer>
            </div>
        </div>
    )
}
